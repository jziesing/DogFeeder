package feeder;

import java.util.Date;

public class FeedObject implements Comparable<FeedObject>{
	public int hour;
	public int minute;
	public int amount;
	public Date lastFeedTime;
	
	public FeedObject(int hour, int minute, int amount){
		this.hour = hour;
		this.minute = minute;
		this.amount = amount;
		lastFeedTime = null;
	}
	
	// check whether this feed object is fed today
	public boolean isFedToday(){
		Date today = new Date();
		if (this.lastFeedTime == null){ return false; }
		System.out.println(today.getDay());
		System.out.println(lastFeedTime.getDay());
		return today.getDate() == this.lastFeedTime.getDate();
	}

	@Override
	/*
	 * Compare the time of this FeedObject to another FeedObject.
	 * return a positive number if this is after o, negative number if this is before o,
	 * and 0 if they have the same time.
	 */
	public int compareTo(FeedObject o) {
		// different hours
		if (this.hour != o.hour){
			return this.hour - o.hour;
		// same hours different minutes
		}else if (this.minute != o.minute){
			return this.hour - o.hour;
		// same hours and minutes
		}else{
			return 0;
		}
	}
	
	public boolean equals(Object obj){
        if (obj == null)
            return false;
        if (obj == this)
            return true;
        if (!(obj instanceof FeedObject))
            return false;
        
        FeedObject fo = (FeedObject) obj;
        
		if (this.hour == fo.hour && this.minute == fo.minute){
			return true;
		}else{
			return false;
		}
	}
}