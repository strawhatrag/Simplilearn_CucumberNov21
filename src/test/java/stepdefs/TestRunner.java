package stepdefs;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features",
  	            	plugin = { "json:target/cucumber.json", "pretty",  "html:target/cucumber-reports" },
  	      		// tags = {"@Regression,@Sanity"}  //or condition
  	      		//tags= {"@Regression","@Sanity"}, //and condition
  	      		//tags= {"~@DataTable"}, //exclude
  	      		tags= {"@Regression"},
  	      		glue= {"stepdefs"})


public class TestRunner {
}
