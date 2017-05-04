package br.holandajunior.workaday;

import org.apache.activemq.broker.BrokerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


/**
 * Created by holandajunior on 29/04/17.
 */

@SpringBootApplication // same as @Configuration @EnableAutoConfiguration @ComponentScan
@EnableJms
public class Application {

    private static final String URL_MSG_BROKER = "tcp://localhost:61616";

    @Bean(initMethod = "start", destroyMethod = "stop")
    public BrokerService broker() throws Exception {

        final BrokerService broker = new BrokerService();
        broker.addConnector( URL_MSG_BROKER );
        broker.setPersistent(false);

        return broker;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*");
            }
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
