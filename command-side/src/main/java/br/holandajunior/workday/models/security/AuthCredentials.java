package br.holandajunior.workday.models.security;

/**
 * Created by holandajunior on 02/05/17.
 */
public class AuthCredentials {

    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
