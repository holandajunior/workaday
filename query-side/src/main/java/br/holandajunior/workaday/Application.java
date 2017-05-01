package br.holandajunior.workaday;

import org.apache.activemq.ActiveMQConnectionFactory;
import org.apache.activemq.broker.BrokerService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jms.DefaultJmsListenerContainerFactoryConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.config.JmsListenerContainerFactory;

import javax.jms.ConnectionFactory;

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

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
