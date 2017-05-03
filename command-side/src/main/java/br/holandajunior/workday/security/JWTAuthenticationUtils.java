package br.holandajunior.workday.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.joda.time.DateTime;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

/**
 * Created by holandajunior on 02/05/17.
 */
public class JWTAuthenticationUtils {

    static final int EXPIRATION_IN_DAYS = 10;

    static final String SECRET = "workadaySecret";
    static final String TOKEN_PREFIX = "Bearer";
    public static final String HEADER_STRING = "X-AUTH-TOKEN";

    static String generateToken ( String username ) {

        String token = Jwts.builder()
                .setSubject(username)
                .setExpiration(new DateTime().plusDays( EXPIRATION_IN_DAYS ).toDate() )
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();

        return token;
    }

    static Authentication getAuthentication (HttpServletRequest request) {

        String token = request.getHeader(HEADER_STRING);

        if (token != null) {
            // parse the token.

            String user = Jwts.parser()
                    .setSigningKey(SECRET)
                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
                    .getBody()
                    .getSubject();

            return user != null ?
                    new UsernamePasswordAuthenticationToken(user, null, new ArrayList()) :
                    null;
        }
        return null;
    }

}

