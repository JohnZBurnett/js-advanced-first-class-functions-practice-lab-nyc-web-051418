// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  var sortedDrivers = [...drivers]
  return sortedDrivers.sort( function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  var sortedDrivers = [...drivers]
  return sortedDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  var revenueSum = 0;
  return drivers.reduce(function(agg, el, i, arr) {
    return agg += el.revenue;
  }, revenueSum);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
