window.onload = function() {
  new WUWind('KCADALYC37');
  new WUWind('KCADALYC1');
  new BelchertownWind('http://www.mixdivr.org/wx/weewx/belchertown/json/homepage.json');
  new WUWind('KCASANFR69');
  new AWWind('80:7D:3A:7C:36:29');
  new TideChart('9414290');
};

// TODO: Refresh the page on a set interval.  Maybe every 10 minutes.
