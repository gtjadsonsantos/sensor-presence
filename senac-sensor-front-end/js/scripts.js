jQuery.support.cors = true;
const filterForm = $(".filterForm");

setInterval(function () {
  updateScreen();
}, 5000);

function updateScreen() {
  const sensor_name = $("input[name='sensorName']").val();
  const url = "http://127.0.0.1:8085/sensor/" + sensor_name;
  $.ajax({
    url: url,
    crossDomain: true,
    async: true,
    type: "GET",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    },
    error: function (error) {
      console.log(error.statusText);
    },
    success: function (response) {
      const tbody = $("#tbody");
      let html = ``;
      $.each(response.data, function (key, value) {
        html += `
        <tr>
          <td>${value.id}</td>
          <td>${value.sensor_name}</td>
          <td>${value.dt}</td>
        </tr>
        `;
      });
      tbody.html(html);
    },
  });
}

filterForm.submit(function (e) {
  e.preventDefault();
  const sensor_name = $("input[name='sensorName']").val();
  $.ajax({
    url: "http://127.0.0.1:8085/sensor/" + sensor_name,
    crossDomain: true,
    async: true,
    type: "GET",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    },
    error: function (error) {
      console.log(error);
    },
    success: function (response) {
      const tbody = $("#tbody");
      let html = ``;
      $.each(response.data, function (key, value) {
        html += `
        <tr>
          <td>${value.id}</td>
          <td>${value.sensor_name}</td>
          <td>${value.dt}</td>
        </tr>
        `;
      });
      tbody.html(html);
    },
  });
});
