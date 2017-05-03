package br.holandajunior.workaday.repository;

import br.holandajunior.workaday.events.point.PointUpdated;
import br.holandajunior.workaday.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import static org.springframework.data.mongodb.core.query.Criteria.where;

/**
 * Created by holandajunior on 01/05/17.
 */
public class UserRepositoryImpl implements UserRepositoryCustom {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void updatePoint( PointUpdated point ) {
        mongoTemplate.updateFirst(
                new Query(where( "points.pointId" ).is( point.getPointId() )),
                new Update().set( "points.$.entry",  point.getEntry() ).set( "points.$.exit", point.getExit() ),
                User.class
        );
    }
}
