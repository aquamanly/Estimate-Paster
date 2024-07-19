
  // Function to get data from the clipboard
  async function getClipboardData() {
      try {
          // Read text from the clipboard
          const text = await navigator.clipboard.readText();
         //alert("Clipboard text read:", text);

          // Parse the text as JSON
          const data = JSON.parse(text);
          //alert("Parsed JSON data:", data);

          // Populate the HTML elements with the JSON data after a delay
          setTimeout(function () {
              // Ensure each element exists before attempting to set its value
              const clientNameElement = document.querySelector("#client-name");
              if (clientNameElement) {
                  clientNameElement.value = data.name;
                  clientNameElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
                  //alert("Client name set and event dispatched:", clientNameElement.value);
              } else {
                  //alert("Client name element not found");
              }

              const clientEmailElement = document.querySelector("#client-email");
              if (clientEmailElement) {
                  clientEmailElement.value = data.email || '';
                  clientEmailElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
                  //alert("Client email set and event dispatched:", clientEmailElement.value);
              } else {
                  //alert("Client email element not found");
              }

              const clientAddress1Element = document.querySelector("#client-address-address1");
              if (clientAddress1Element) {
                  clientAddress1Element.value = data.address;
                  clientAddress1Element.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
                  //alert("Client address1 set and event dispatched:", clientAddress1Element.value);
              } else {
                  //alert("Client address1 element not found");
              }

              const clientAddress2Element = document.querySelector("#client-address-address2");
              if (clientAddress2Element) {
                  clientAddress2Element.value = `${data.city}, ${data.state}`;
                  clientAddress2Element.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
                  //alert("Client address2 set and event dispatched:", clientAddress2Element.value);
              } else {
                  //alert("Client address2 element not found");
              }

              const clientAddress3Element = document.querySelector("#client-address-address3");
              if (clientAddress3Element) {
                  clientAddress3Element.value = data.zip;
                  clientAddress3Element.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
                  //alert("Client address3 set and event dispatched:", clientAddress3Element.value);
              } else {
                  //alert("Client address3 element not found");
              }

              const clientMobileElement = document.querySelector("#client-mobile");
              if (clientMobileElement) {
                  clientMobileElement.value = data.phone;
                  clientMobileElement.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
                  //alert("Client mobile set and event dispatched:", clientMobileElement.value);
              } else {
                  //alert("Client mobile element not found");
              }

              
          }, 2000); // Adjust the delay as needed

      } catch (err) {
          console.error('Failed to read clipboard contents: ', err);
      }
  }

  // Call the function to get and populate the data
  getClipboardData();


