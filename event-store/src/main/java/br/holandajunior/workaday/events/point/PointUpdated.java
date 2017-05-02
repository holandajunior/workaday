package br.holandajunior.workaday.events.point;

import br.holandajunior.workaday.events.BaseEvent;

import java.util.Date;

/**
 * Created by holandajunior on 01/05/17.
 */
public class PointUpdated implements BaseEvent {

    public static final String DESTINATION = "event.pointUpdated";

    private long pointId; // From relational database
    private Date entry;
    private Date exit;

    public PointUpdated( long pointId, Date entry, Date exit ) {

        this.pointId = pointId;
        this.entry = entry;
        this.exit = exit;
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
