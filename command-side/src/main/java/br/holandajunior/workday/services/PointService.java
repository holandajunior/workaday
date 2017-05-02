package br.holandajunior.workday.services;

import br.holandajunior.workaday.events.point.PointCreated;
import br.holandajunior.workaday.events.point.PointUpdated;
import br.holandajunior.workday.commands.CreatePoint;
import br.holandajunior.workday.commands.UpdatePoint;
import br.holandajunior.workday.models.Point;
import br.holandajunior.workday.models.User;
import br.holandajunior.workday.repositories.IPointRepository;
import br.holandajunior.workday.repositories.IUserRepository;
import br.holandajunior.workday.services.api.IPointService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by holandajunior on 02/05/17.
 */

@Service
public class PointService implements IPointService {

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IPointRepository pointRepository;

    @Autowired
    private JmsTemplate jmsTemplate;

    @Override
    @Transactional
    public void save(CreatePoint createPointCommand) {

        // Save point
        Point point = new Point();
        point.setEntry(createPointCommand.getEntry());
        point.setExit(createPointCommand.getExit());

        Point newPoint = pointRepository.saveAndFlush(point);

        User user = userRepository.findOne( createPointCommand.getUserId() );
        user.addPoint(newPoint);

        userRepository.save(user);

        // Send event
        PointCreated pointCreated = new PointCreated( createPointCommand.getUserId(),
                newPoint.getId(),
                createPointCommand.getEntry(),
                createPointCommand.getExit());

        jmsTemplate.convertAndSend(PointCreated.DESTINATION, pointCreated);

    }

    @Override
    public void update(long pointId, UpdatePoint updatePointCommand) {

        // Update point
        Point point = pointRepository.findOne(pointId);

        point.setEntry( updatePointCommand.getEntry() );
        point.setExit( updatePointCommand.getExit() );

        pointRepository.save(point);

        // Send event

        PointUpdated pointUpdated = new PointUpdated( point.getId(),
                updatePointCommand.getEntry(),
                updatePointCommand.getExit());

        jmsTemplate.convertAndSend(PointUpdated.DESTINATION, pointUpdated);

    }
}
