document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("industry");
    const adviceBox = document.getElementById("advice");
    const button = document.getElementById("getAdvice");
  
    const adviceMap = {
      retail: "Focus on customer service and supply chain efficiency. Track seasonal trends to boost sales.",
      technology: "Innovate continuously and invest in cybersecurity. Stay ahead with emerging tech trends.",
      hospitality: "Prioritize guest experience and cleanliness. Reputation and online reviews are key.",
      finance: "Ensure compliance with regulations. Invest in secure digital tools and data analytics."
    };
  
    button.addEventListener("click", () => {
      const selected = select.value;
      const advice = adviceMap[selected];
      adviceBox.innerText = advice;
      adviceBox.style.display = "block";
    });
  });
  