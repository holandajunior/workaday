package br.holandajunior.workaday.projections;

import br.holandajunior.workaday.events.point.PointCreated;
import br.holandajunior.workaday.events.point.PointUpdated;
import br.holandajunior.workaday.events.user.UserCreated;
import br.holandajunior.workaday.model.Point;
import br.holandajunior.workaday.model.User;
import br.holandajunior.workaday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * Created by holandajunior on 30/04/17.
 */

@Service
public class UserProjections {

    @Autowired
    private UserRepository userRepo;

    @JmsListener(destination = UserCreated.DESTINATION)
    public void onUserCreated( UserCreated userCreated ) {

        User user = new User();
        user.setUserId( userCreated.getUserId() );
        user.setName( userCreated.getName() );
        user.setEmail( userCreated.getEmail() );
        user.setPoints(new ArrayList<Point>());

        userRepo.save( user );
    }

    @JmsListener(destination = PointCreated.DESTINATION)
    public void onPointCreated(PointCreated pointCreated) {

        User user = userRepo.findByUserId( pointCreated.getUserId() );

        Point point = new Point();
        point.setPointId( pointCreated.getPointId() );
        point.setEntry( pointCreated.getEntry() );
        point.setExit( pointCreated.getExit() );

        user.getPoints().add( point );

        userRepo.save( user );
    }

    @JmsListener(destination = PointUpdated.DESTINATION)
    public void onPointUpdated(PointUpdated pointUpdated) {

        userRepo.updatePoint( pointUpdated );
    }



}
