export const convertWeatherCode = (code) => {
    return code === 0
        ? '☀️'
        : code === 1
          ? '🌤️'
          : code === 2
            ? '⛅'
            : code === 3
              ? '☁️'
              : code === (45 || 48)
                ? '🌫️'
                : code === (51 || 53 || 55)
                  ? '🌦️'
                  : code === (63 || 61 || 65)
                    ? '☔'
                    : code === (71 || 73 || 75)
                      ? '🌨️'
                      : code === (80 || 81 || 82)
                        ? '⛈️'
                        : '🔎';
};
