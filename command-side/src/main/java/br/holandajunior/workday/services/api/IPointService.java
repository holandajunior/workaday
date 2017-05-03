package br.holandajunior.workday.services.api;

import br.holandajunior.workday.commands.CreatePoint;
import br.holandajunior.workday.commands.UpdatePoint;

/**
 * Created by holandajunior on 02/05/17.
 */
public interface IPointService {

    void save( CreatePoint createPointCommand );
    void update( long pointId, UpdatePoint updatePointCommand );
}
