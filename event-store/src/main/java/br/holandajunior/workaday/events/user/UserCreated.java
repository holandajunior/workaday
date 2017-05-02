package br.holandajunior.workaday.events.user;

import br.holandajunior.workaday.events.BaseEvent;

/**
 * Created by holandajunior on 29/04/17.
 */

public class UserCreated implements BaseEvent {

    public static final String DESTINATION = "event.userCreated";

    private long userId; // From relational database
    private String name;
    private String email;

    public UserCreated( long userId, String name, String email ) {

        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    public long getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}
