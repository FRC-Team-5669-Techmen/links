document.getElementById("myinput").onclick = function () {
    var link = document.getElementById("linkinput").value;
    var path = document.getElementById("path").value;
    var data = {
      domain: "l.frcteam5669.com",
      originalURL: link,
      allowDuplicates: false,
      path: path || null
    };
    fetch("https://api.short.cm/links/public", {
      method: "post",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        authorization: "pk_RIUhuDWfmOf39uRa"
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.getElementById("message").innerHTML =
          "Your short link is <a href='" + data.shortURL + "'>" + data.shortURL + "</a>";
      });
    document.getElementById("linkinput").value = "";
  };
  