package br.holandajunior.workaday.events.point;

import br.holandajunior.workaday.events.BaseEvent;

import java.util.Date;

/**
 * Created by holandajunior on 29/04/17.
 */
public class PointCreated implements BaseEvent {

    public static final String DESTINATION = "event.pointCreated";

    private long userId; // From relational database
    private long pointId; // From relational database
    private Date entry;
    private Date exit;

    public PointCreated( long userId, long pointId, Date entry, Date exit ) {

        this.userId = userId;
        this.pointId = pointId;
        this.entry = entry;
        this.exit = exit;
    }

    public long getUserId() {
        return userId;
    }

    public long getPointId() {
        return pointId;
    }

    public Date getEntry() {
        return entry;
    }

    public Date getExit() {
        return exit;
    }
}
