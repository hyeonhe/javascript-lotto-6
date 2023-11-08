import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, PRIZE_INFO } from "../constants/constants";

class ConsolePrint {
  #printLottoNumbers(lotto) {
    const lottoStr = `[${lotto.getNumbers().join(", ")}]`;
    Console.print(lottoStr);
  }

  printLottos(lottos) {
    Console.print(OUTPUT_MESSAGE.lottoCounts(lottos.length));
    for (let i = 0; i < lottos.length; i++) {
      this.#printLottoNumbers(lottos[i]);
    }
  }

  printPrize(winningCounts) {
    Console.print("당첨 통계");
    Console.print("---");

    Object.entries(winningCounts).forEach(([key, value]) => {
      console.log(key, value);
      Console.print(`${PRIZE_INFO[key]} - ${value}개`);
    });
  }
}

export default ConsolePrint;
