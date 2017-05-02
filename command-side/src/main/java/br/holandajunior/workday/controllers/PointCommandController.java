package br.holandajunior.workday.controllers;

import br.holandajunior.workaday.events.point.PointCreated;
import br.holandajunior.workaday.events.point.PointUpdated;
import br.holandajunior.workday.commands.CreatePoint;
import br.holandajunior.workday.commands.UpdatePoint;
import br.holandajunior.workday.models.Point;
import br.holandajunior.workday.models.User;
import br.holandajunior.workday.repositories.IPointRepository;
import br.holandajunior.workday.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.web.bind.annotation.*;

/**
 * Created by holandajunior on 30/04/17.
 */

@RestController
@RequestMapping("/points")
public class PointCommandController {

    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private IPointRepository pointRepository;

    @Autowired
    private JmsTemplate jmsTemplate;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void save( @RequestBody CreatePoint createPointCommand ) {

        // Save point
        Point point =  new Point();
        point.setEntry( createPointCommand.getEntry() );
        point.setExit( createPointCommand.getExit() );

        Point newPoint = pointRepository.saveAndFlush( point );

        User user = userRepository.findOne( createPointCommand.getUserId() );
        user.addPoint( newPoint );

        userRepository.save( user );

        // Send event
        PointCreated pointCreated = new PointCreated( createPointCommand.getUserId(),
                                                      newPoint.getId(),
                                                      createPointCommand.getEntry(),
                                                      createPointCommand.getExit() );

        jmsTemplate.convertAndSend( PointCreated.DESTINATION, pointCreated );

    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public void update(  @PathVariable("id") long id, @RequestBody UpdatePoint updatePointCommand ) {

        // Update point
        Point point = pointRepository.findOne( id );

        point.setEntry( updatePointCommand.getEntry() );
        point.setExit( updatePointCommand.getExit() );

        pointRepository.save( point );

        // Send event

        PointUpdated pointUpdated = new PointUpdated( point.getId(),
                                                      updatePointCommand.getEntry(),
                                                      updatePointCommand.getExit());

        jmsTemplate.convertAndSend( PointUpdated.DESTINATION, pointUpdated );

    }


}
