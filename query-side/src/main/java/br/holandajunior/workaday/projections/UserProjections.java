package br.holandajunior.workaday.projections;

import br.holandajunior.workaday.events.point.PointCreated;
import br.holandajunior.workaday.events.user.UserCreated;
import br.holandajunior.workaday.model.Point;
import br.holandajunior.workaday.model.User;
import br.holandajunior.workaday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Service;

/**
 * Created by holandajunior on 30/04/17.
 */

@Service
public class UserProjections {

    @Autowired
    private UserRepository userRepo;

    @JmsListener( destination = UserCreated.DESTINATION)
    public void onUserCreated( UserCreated userCreated ) {

        User user = new User();
        user.setName( userCreated.getName() );
        user.setEmail( userCreated.getEmail() );

        userRepo.save( user );
    }

    @JmsListener( destination = PointCreated.DESTINATION)
    public void onPointCreated(PointCreated pointCreated) {

        User user = userRepo.findOne( pointCreated.getUserId() );

        Point point = new Point();
        point.setEntry( pointCreated.getEntry() );
        point.setExit( pointCreated.getExit() );

        user.getPoints().add( point );

        userRepo.save( user );
    }

}
