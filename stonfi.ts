import { TonClient } from "@ton/ton";
import { DEX } from "@ston-fi/sdk";

async function main() {
  const USER_WALLET_ADDRESS = "UQAIAros6TKIytMGGZQQDul2d98ZzunSIDWvpaUZznw2WueN"; // ! replace with your address
  const POOL_ADDRESS = "EQD8TJ8xEWB1SpnRE4d89YO3jl0W0EiBnNS4IBaHaUmdfizE"; // TON-USDT

  const client = new TonClient({
    endpoint: "https://toncenter.com/api/v2/jsonRPC",
  });

  const pool = client.open(new DEX.v1.Pool(POOL_ADDRESS));

  const txParams = await pool.getBurnTxParams({
    amount: 59583,
    responseAddress: USER_WALLET_ADDRESS,
    queryId: 12345,
  });

  console.log("txParams", txParams);
}

main().catch((e) => console.error(e)).then(() => console.log("Done!"))