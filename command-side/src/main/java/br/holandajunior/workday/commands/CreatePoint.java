package br.holandajunior.workday.commands;

import java.util.Date;

/**
 * Created by holandajunior on 29/04/17.
 */
public class CreatePoint implements ICommand {


    private Date entry;
    private Date exit;

    public CreatePoint( Date entry, Date exit ) {
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
