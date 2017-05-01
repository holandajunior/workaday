package br.holandajunior.workaday.events.point;

import br.holandajunior.workaday.events.BaseEvent;

import java.util.Date;
import java.util.UUID;

/**
 * Created by holandajunior on 29/04/17.
 */
public class PointCreated implements BaseEvent {

    public static final String DESTINATION = "event.pointCreated";

    private long userId;
    private Date entry;
    private Date exit;

    public PointCreated( long userId, Date entry, Date exit ) {

        this.userId = userId;
        this.entry = entry;
        this.exit = exit;
    }

    public long getUserId() {
        return userId;
    }

    public Date getEntry() {
        return entry;
    }

    public Date getExit() {
        return exit;
    }
}
