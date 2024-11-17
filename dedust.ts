import {Pool, JettonWallet} from '@dedust/sdk';
import {Address, TonClient, toNano} from "@ton/ton";

const LP_WALLET_ADDRESS = Address.parse("EQAvVLHMHTwME6d6Im5X3muwa4rMQPBQ1e82l4o2g5Qc0ntG"); // TON-USDT LP
const USER_WALLET_ADDRESS = Address.parse("UQAIAros6TKIytMGGZQQDul2d98ZzunSIDWvpaUZznw2WueN");

async function main() {
    const tonClient = new TonClient({
        endpoint: "https://toncenter.com/api/v2/jsonRPC",
    });
    const lpWallet = tonClient.open(JettonWallet.createFromAddress(LP_WALLET_ADDRESS));

    console.log("Balance", await lpWallet.getBalance());

    await lpWallet.sendBurn(sender, toNano('0.5'), {
        amount: await lpWallet.getBalance(),
    });
}

main().catch((e) => console.error(e)).then(() => console.log("Done!"))