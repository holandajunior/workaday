package br.holandajunior.workday.commands;

import br.holandajunior.workday.commands.api.ICommand;

import javax.validation.constraints.NotNull;

/**
 * Created by holandajunior on 29/04/17.
 */
public class CreateUser implements ICommand {

    private String username;

    @NotNull
    private String email;

    @NotNull
    private String password;

    public CreateUser() {
        super();
    }

    public CreateUser( String name, String email, String password ) {
        super();

        this.username = name;
        this.email = email;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
