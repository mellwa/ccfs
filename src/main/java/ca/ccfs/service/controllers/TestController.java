package ca.ccfs.service.controllers;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public @ResponseBody String response() {
        return "test";
    }

    @RequestMapping(value = "/data", method = RequestMethod.GET)
    public @ResponseBody String data() {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("key", "value");
        return jsonObject.toString();
    }
}
