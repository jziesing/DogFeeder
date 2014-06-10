package feeder;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class ScheduleFeed
 */
@WebServlet("/ScheduleFeed")
public class ScheduleFeed extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public static ArrayList<FeedObject> scheduleFeeds = new ArrayList<FeedObject>();  // the array of all scheduled feeds
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ScheduleFeed() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
		Map parameters = request.getParameterMap();
		Gson gson = new Gson();		
	    out.print(gson.toJson(scheduleFeeds));
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    PrintWriter out = response.getWriter();
		Map parameters = request.getParameterMap();
		
		if (parameters.containsKey("type") && parameters.containsKey("hour") && parameters.containsKey("minute") && parameters.containsKey("amount")){
			try{
				// parse the parameters
				String type = ((String[])parameters.get("type"))[0];
				int hour = Integer.parseInt(((String[])parameters.get("hour"))[0]);
				int minute = Integer.parseInt(((String[])parameters.get("minute"))[0]);
				int amount = Integer.parseInt(((String[])parameters.get("amount"))[0]);
				
				if (type.equals("create")){
					//add the feed to the schedule
					String result = addSchdeduleFeed(hour,minute,amount);
					
					// prints out response
				    out.print(result);
					
				    return;
				}else if (type.equals("remove")){
					//remove the feed from the schedule
					String result = removeSchdeduleFeed(hour,minute,amount);
					
					// prints out response
				    out.print(result);
					
				    return;
				}else if (type.equals("update")){
					int newHour = Integer.parseInt(((String[])parameters.get("newHour"))[0]);
					int newMinute = Integer.parseInt(((String[])parameters.get("newMinute"))[0]);
					int newAmount = Integer.parseInt(((String[])parameters.get("newAmount"))[0]);
					
					//remove the feed from the schedule
					String result = updateSchdeduleFeed(hour,minute,amount,newHour,newMinute,newAmount);
					
					// prints out response
				    out.print(result);
					
				    return;
				}else{
					// prints out response
				    out.print("invalid type");
					
				    return;
				}
			}catch(NumberFormatException ex){
			    out.print("illegal value");
			    return;
			}
		}else{
		    out.print("illegal value");			
		}
	}

	/*
	 * Add new schedule feed to the schedule.
	 * Return feedback as the return value.
	 */
	String addSchdeduleFeed(int hour, int minute, int amount){
		//check whether the time is valid
		if (hour < 0 || hour > 23 || minute < 0 || minute > 59){
		    return("illegal feed time");
		}
		
		// check whether the time is created
		FeedObject newFeed = new FeedObject(hour, minute, amount);
		if (ScheduleFeed.scheduleFeeds.contains(newFeed)){
		    return("duplicate feed");
		}
		
		// add the new feed
		if (ScheduleFeed.scheduleFeeds.add(newFeed)){
			return("feed created");
		}else{
			return("error creating feed");
		}
	}

	/*
	 * Remove feed from the schedule.
	 * Return feedback as the return value.
	 */
	String removeSchdeduleFeed(int hour, int minute, int amount){
		//check whether the time is valid
		if (hour < 0 || hour > 23 || minute < 0 || minute > 59){
		    return("illegal feed time");
		}
		
		// check whether the time is remove
		FeedObject newFeed = new FeedObject(hour, minute, amount);
		if (ScheduleFeed.scheduleFeeds.remove(newFeed)){
		    return("removed");
		}else{
			return("does not exist");
		}
	}

	/*
	 * Update feed from the schedule.
	 * Return feedback as the return value.
	 */
	String updateSchdeduleFeed(int hour, int minute, int amount, int newHour, int newMinute, int newAmount){
		//check whether the time is valid
		if (hour < 0 || hour > 23 || minute < 0 || minute > 59){
		    return("illegal feed time");
		}
		
		// check whether the time exist
		FeedObject oldFeed = new FeedObject(hour, minute, amount);
		if (ScheduleFeed.scheduleFeeds.contains(oldFeed)){
			// create the new time if the new time does not exist; Or just updating amount
			FeedObject newFeed = new FeedObject(newHour, newMinute, newAmount);
			if (!ScheduleFeed.scheduleFeeds.contains(newFeed) || (hour == newHour && minute == newMinute)){
				ScheduleFeed.scheduleFeeds.remove(oldFeed);
				ScheduleFeed.scheduleFeeds.add(newFeed);
				return("updated");
			}else{
				return("update time already exist");
			}
		    
		}else{
			return("time does not exist");
		}
	}
}
