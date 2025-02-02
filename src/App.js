import { Console } from "@woowacourse/mission-utils";
import System from "./System";

class App {
  async play() {
    const system = new System();
    const money = await system.getMoney();
    const lottoCount = Math.floor(money / 1000);
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }
}

export default App;
