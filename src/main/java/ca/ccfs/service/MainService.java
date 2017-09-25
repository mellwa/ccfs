package ca.ccfs.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.ErrorPageFilter;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.WebApplicationContext;

@ComponentScan("ca.ccfs.service")
@Configuration
@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
@SpringBootApplication
public class MainService extends SpringBootServletInitializer{

    private static Class<MainService> rsvpGramToolkitServiceClass = MainService.class;


    @Override
    protected WebApplicationContext run(SpringApplication application) {
        application.getSources().remove(ErrorPageFilter.class);
        return super.run(application);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(rsvpGramToolkitServiceClass);
    }

    public static void main(String[] args) {
        SpringApplication.run(MainService.class, args);
    }
}
