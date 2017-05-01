package br.holandajunior.workaday.events.user;

import br.holandajunior.workaday.events.BaseEvent;

import java.util.UUID;

/**
 * Created by holandajunior on 29/04/17.
 */


public class UserCreated implements BaseEvent {

    public static final String DESTINATION = "event.userCreated";

    private String name;
    private String email;

    public UserCreated(String name, String email ) {

        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
