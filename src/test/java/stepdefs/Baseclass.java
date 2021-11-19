package stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Baseclass {
	
	public static WebDriver driver;
	
	@Before 
	public void Setup(){
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\surupura\\selenium_demo\\selenium_java\\simplilearn_cucumber\\chromedriver.exe");
        
        driver = new ChromeDriver();
		
		
	}
	
	@After 
	public void TearDown(){
		
		driver.quit();
		
		
	}

}
