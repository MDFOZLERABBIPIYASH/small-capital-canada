<!--<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.init({
      appId: "df695bed-768a-4f68-b8f7-c93d4e5fb7fa",
    });
  });
</script>-->
<script>
	setTimeout(function(){
  console.log("about to initialize OneSignal"); 
  //window.addEventListener('load', function() {
    window._oneSignalInitOptions.promptOptions = {
      slidedown: {
        prompts: [
          {
            type: "category",
            autoPrompt: true,
            text: {
              /* actionMessage limited to 90 characters */
              actionMessage: "We'd like to send you push notifications. Please select categories that interest you:",
              /* acceptButton limited to 15 characters */
              acceptButtonText: "Yes",
              /* cancelButton limited to 15 characters */
              cancelButtonText: "No",
              /* CATEGORY SLIDEDOWN SPECIFIC TEXT */
              negativeUpdateButton:"Cancel",
              positiveUpdateButton:"Save Preferences",
              updateMessage: "Update your push notification subscription preferences.",
            },
            delay: {
              timeDelay: 1,//seconds to wait for display
              pageViews: 1,//# pageviews for prompt to display
            },
            categories: [
              {
                tag: "business",
                label: "Business",
              },
              {
                tag: "markets",
                label: "Markets",
              },
              {
                tag: "health",
                label: "Health",
              },
              {
                tag: "ev_battery",
                label: "EV & Battery",
              },
							{
                tag: "technology",
                label: "Technology",
              },
							{
                tag: "energy",
                label: "Energy",
              },
							{
                tag: "mining",
                label: "Mining",
              },
            ]
          }
        ]
      }
    }
    window.OneSignal = window.OneSignal || [];
    window.OneSignal.push(function() {
      window.OneSignal.init(window._oneSignalInitOptions);
    });
 // });
}, 3000);
</script>
