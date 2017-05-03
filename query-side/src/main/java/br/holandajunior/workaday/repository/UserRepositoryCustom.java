package br.holandajunior.workaday.repository;


import br.holandajunior.workaday.events.point.PointUpdated;

/**
 * Created by holandajunior on 29/04/17.
 */

public interface UserRepositoryCustom {

    void updatePoint( PointUpdated point );
}
