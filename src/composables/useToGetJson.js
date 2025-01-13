

export function useToGetJson() {
  const routes = ref([]); 
  const ships = ref([]);
    const GetCourseData = async()=>{
      try {
        const response = await fetch("/jsonData/course.json"); // 假設 JSON 檔案位於 public 資料夾
        if (!response.ok) throw new Error("無法獲取資料");
        routes.value = await response.json(); // 將 JSON 資料存入 routes
      } catch (error) {
        console.error("資料載入失敗：", error);
      }
    }
    const GetShipData = async()=>{
      try {
        const response = await fetch("/jsonData/ship.json"); // 假設 JSON 檔案位於 public 資料夾
        if (!response.ok) throw new Error("無法獲取資料");
        ships.value = await response.json(); // 將 JSON 資料存入 routes
      } catch (error) {
        console.error("資料載入失敗：", error);
      }
    }

    GetCourseData();
    GetShipData();
  return {
    routes,
    ships
  };
}