package br.holandajunior.workaday.rest;

/**
 * Created by holandajunior on 05/05/17.
 */
public class RestResponse {

    private Object data;
    private String message;
    private int status;

    public RestResponse(Object data, String message, int status) {
        this.data = data;
        this.message = message;
        this.status = status;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
