export function useTimePicker() {
  const times = ref([]);

  // 生成 24 小時制整點時間選項
  const generateTimes = () => {
    times.value = Array.from({ length: 24 }, (_, i) => {
      const hour = i.toString().padStart(2, '0'); // 保證兩位數格式
      return { label: `${hour}`, value: `${hour}` };
    });
  };

  

  generateTimes(); // 初始化選項

  return {
    times
  };
}
