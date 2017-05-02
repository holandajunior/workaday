package br.holandajunior.workday.controllers;

import br.holandajunior.workday.commands.CreatePoint;
import br.holandajunior.workday.commands.UpdatePoint;
import br.holandajunior.workday.services.api.IPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.async.DeferredResult;

/**
 * Created by holandajunior on 30/04/17.
 */

@RestController
@RequestMapping("/points")
public class PointCommandController {

    @Autowired
    private IPointService pointService;

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public DeferredResult< ResponseEntity<Void> > save(@RequestBody final CreatePoint createPointCommand ) {

        final DeferredResult< ResponseEntity<Void> > result = new DeferredResult<ResponseEntity<Void>>();

        new Thread( new Runnable() {

            @Override
            public void run() {

                pointService.save( createPointCommand );
                result.setResult( new ResponseEntity<Void>( HttpStatus.CREATED ) );
            }

        }).start();

        return result;

    }

    @RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public DeferredResult< ResponseEntity<Void> > update(  @PathVariable("id") final long id, @RequestBody final UpdatePoint updatePointCommand ) {

        final DeferredResult< ResponseEntity<Void> > result = new DeferredResult<ResponseEntity<Void>>();

        new Thread( new Runnable() {

            @Override
            public void run() {

                pointService.update( id, updatePointCommand );
                result.setResult( new ResponseEntity<Void>( HttpStatus.OK ) );

            }
        }).start();

        return result;
    }


}
