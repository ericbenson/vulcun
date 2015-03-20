var Sequelize = require("sequelize");
var sequelize = new Sequelize("vulcun", "root", "");


var Contest = sequelize.define('Contest', {
  contestName: Sequelize.STRING,
  prizePool: Sequelize.INTEGER,
  currentEntries: Sequelize.INTEGER,
  totalEntries: Sequelize.INTEGER,
  entryFee: Sequelize.INTEGER,
  startDate: Sequelize.DATE
});

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
Contest.sync().then(function() {
  console.log('synced!');


  // var newContest = Contest.build({contestName: "EU LCS Beginner Practice W8D2",
		// 					   prizePool: 380,
		// 					   currentEntries: 3803,
		// 					   totalEntries: 12000,
		// 					   entryFee: 0,
		// 					   startDate: '2015-03-19 02:30:00'
		// 					});
  // newContest.save();

  // newContest = Contest.build({contestName: "Summoner's Inn Triple-Up NA W8D1",
		// 					   prizePool: 120,
		// 					   currentEntries: 116,
		// 					   totalEntries: 150,
		// 					   entryFee: 1,
		// 					   startDate: '2015-03-20 02:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "NA LCS Beginner Triple-Up #2 W8D2",
		// 					   prizePool: 90,
		// 					   currentEntries: 54,
		// 					   totalEntries: 110,
		// 					   entryFee: 1,
		// 					   startDate: '2015-03-21 03:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "EU Challenger Beginner Practice W5D2",
		// 					   prizePool: 125,
		// 					   currentEntries: 235,
		// 					   totalEntries: 4000,
		// 					   entryFee: 0,
		// 					   startDate: '2015-03-24 02:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "NA Challenger Beginner Practice W5D2",
		// 					   prizePool: 125,
		// 					   currentEntries: 111,
		// 					   totalEntries: 4000,
		// 					   entryFee: 0,
		// 					   startDate: '2015-03-24 02:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "Princess Peach LPL W9D1",
		// 					   prizePool: 300,
		// 					   currentEntries: 67,
		// 					   totalEntries: 75,
		// 					   entryFee: 5,
		// 					   startDate: '2015-03-19 04:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "LPL W9D1 Practice #2",
		// 					   prizePool: 62,
		// 					   currentEntries: 350,
		// 					   totalEntries: 2000,
		// 					   entryFee: 0,
		// 					   startDate: '2015-03-19 04:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "George Washington LPL W9D1",
		// 					   prizePool: 60,
		// 					   currentEntries: 24,
		// 					   totalEntries: 75,
		// 					   entryFee: 1,
		// 					   startDate: '2015-03-19 04:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "LCK W9D2 Practice",
		// 					   prizePool: 380,
		// 					   currentEntries: 5375,
		// 					   totalEntries: 12000,
		// 					   entryFee: 0,
		// 					   startDate: '2015-03-19 08:30:00'
		// 					});
  // newContest.save();
  // newContest = Contest.build({contestName: "Sivir Battle Mistress LCK W9D2",
		// 					   prizePool: 300,
		// 					   currentEntries: 45,
		// 					   totalEntries: 75,
		// 					   entryFee: 5,
		// 					   startDate: '2015-03-19 06:30:00'
		// 					});
  // newContest.save();



});

module.exports = Contest;