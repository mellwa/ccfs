package ca.ccfs.service.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainPageController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String showMainWebPage() {
        return "index";
    }

}
