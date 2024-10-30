function checkColor(color) {
  const rgb = color.split(",").map(Number);
  const [r, g, b] = rgb;

  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  const luminance = a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;

  const threshold = 0.25;

  const mode = localStorage.getItem("mode");
  if (mode == "light" && luminance < threshold) return lightenColor(color, 0.5);
  else if (mode == "dark" && luminance > 0.4) return darkenColor(color, 0.5);

  return color;
}

function lightenColor(color, percent) {
  const rgb = color.split(",");
  for (let i = 0; i < rgb.length; i++) {
    rgb[i] = Math.min(
      255,
      Math.floor(parseInt(rgb[i]) + (255 - parseInt(rgb[i])) * percent)
    );
  }
  return rgb.join(",");
}

function darkenColor(color, percent) {
  const rgb = color.split(",");
  for (let i = 0; i < rgb.length; i++) {
    rgb[i] = Math.max(0, Math.floor(parseInt(rgb[i]) * (1 - percent)));
  }
  return rgb.join(",");
}
