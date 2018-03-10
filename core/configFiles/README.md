0x2134F816D937e0e1B0D7E295389379833c431a59
50ed37866defc55a267995bf04dc6e2ede610cbe0e824c7c46796a964c050de0


# This config should be placed in following path:
#   ~/.local/share/io.parity.ethereum/config.toml

[parity]
# Local Development Chain
chain = "dev"
# You will be identified as 'Node-0' amongst other nodes..
identity = "Node-0"

[websockets]
# UI won't work and WebSockets server will be not available.
disable = true

[ipc]
# You won't be able to use IPC to interact with Parity.
disable = true

[mining]
# Account address to receive reward when block is mined.
author = "0x2134F816D937e0e1B0D7E295389379833c431a59"
