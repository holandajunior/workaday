package br.holandajunior.workday.models.repository;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by holandajunior on 29/04/17.
 */

@Entity
@Table(name = "workaday_point")
public class Point {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private Date entry;
    private Date exit;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getId() {
        return id;
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

        return id == point.id;

    }

    @Override
    public int hashCode() {
        return (int) (id ^ (id >>> 32));
    }
}

