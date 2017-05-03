package br.holandajunior.workday.commands;

import br.holandajunior.workday.commands.api.ICommand;

import java.util.Date;

/**
 * Created by holandajunior on 29/04/17.
 */
public class CreatePoint implements ICommand {

    private long userId;
    private Date entry;
    private Date exit;

    public CreatePoint(){
        super();
    }

    public CreatePoint( long userId, Date entry, Date exit ) {
        super();

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
