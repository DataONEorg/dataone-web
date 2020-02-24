# Helpful info for content editors

## Webinars

### Webinar Date & Time

#### Entering webinar time in forestry

When entering the date and time of the webinar in forestry, select the time that the event occurs in **your current timezone**. It will automatically be converted to the appropriate time in the appropriate timezone when saved. For example, if the webinar happens at 10am in California, but you're entering this information from New York, select 1pm as the time for the webinar, since New York is 3 hours ahead of California. For details, see [Forestry's rationale](https://forestry.io/docs/faqs/timezones/).

#### Entering webinar time manually

If you are not using forestry, and instead entering the date and time manually in the markdown file, you can indicate the associated timezone using the notation `2017-03-03T10:00:00-08:00`, where `-08:00` means offset -8 hours from UTC, i.e. Pacific Standard Time. To learn more about time formats in Hugo, [see this article](https://gohugohq.com/howto/hugo-dateformat/).

![XKCD Supervillain Plan](https://www.explainxkcd.com/wiki/images/e/e8/supervillain_plan.png)

## FAQ & Troubleshooting

### Problem: The time that's displaying for a webinar is different from the time that I entered in Forestry!

**Solution:** Enter the time that the event occurs *in your current time zone*. See the section "Entering webinar time in forestry" section, above. If you're still getting the incorrect time and you're using a VPN, check whether entering the time in your VPN's location fixes it.

### Problem: I created a new page and it's not showing up on the website

**Solution:** 
- Check that that page is not a draft
- Check that the date of the page is not set to the future
