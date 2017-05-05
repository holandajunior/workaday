package br.holandajunior.workaday.rest;

import br.holandajunior.workaday.exceptions.ResourceNotFoundException;
import br.holandajunior.workaday.rest.RestResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * Created by holandajunior on 05/05/17.
 */

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler( value = { NullPointerException.class, ResourceNotFoundException.class })
    public ResponseEntity<RestResponse> handleNotFound( Exception exception ) {
        return new ResponseEntity<RestResponse>(new RestResponse( null, "Resource not found.", HttpStatus.NOT_FOUND.value() ), HttpStatus.NOT_FOUND );
    }
}
