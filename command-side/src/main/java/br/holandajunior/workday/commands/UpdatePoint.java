package br.holandajunior.workday.commands;

import java.util.Date;

/**
 * Created by holandajunior on 01/05/17.
 */
public class UpdatePoint implements ICommand {

    private Date entry;
    private Date exit;

    public UpdatePoint(){
        super();
    }

    public UpdatePoint( Date entry, Date exit ) {
        super();

        this.entry = entry;
        this.exit = exit;
    }

    public Date getEntry() {
        return entry;
    }

    public Date getExit() {
        return exit;
    }
}
