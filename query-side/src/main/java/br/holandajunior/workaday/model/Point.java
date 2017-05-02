package br.holandajunior.workaday.model;

import java.util.Date;

/**
 * Created by holandajunior on 29/04/17.
 */

public class Point {

    private long pointId;
    private Date entry;
    private Date exit;

    public long getPointId() {
        return pointId;
    }

    public void setPointId(long pointId) {
        this.pointId = pointId;
    }

    public Date getEntry() {
        return entry;
    }

    public void setEntry(Date entry) {
        this.entry = entry;
    }

    public Date getExit() {
        return exit;
    }

    public void setExit(Date exit) {
        this.exit = exit;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Point point = (Point) o;

        return pointId == point.pointId;

    }

    @Override
    public int hashCode() {
        return (int) (pointId ^ (pointId >>> 32));
    }
}
