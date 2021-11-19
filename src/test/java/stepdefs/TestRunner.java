package stepdefs;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        
		plugin= {"pretty","html:target/cucumber-html","json:target/cucumber.json"},
        features = "src/test/java/features",
        //tags= {"@Sanity,@Regression"}, //OR
        //tags= {"@Sanity","@Regression"}, //AND
        
        
        tags= {"~@DataTable"},
        glue= {"stepdefs"}
 )
public class TestRunner {
}
