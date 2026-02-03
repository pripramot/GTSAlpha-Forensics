import json
import os
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, "..", "renderer", "src", "data")

INPUT = os.path.join(DATA_DIR, "platforms.json")
OUTPUT = os.path.join(DATA_DIR, "platforms.state.json")

REQUIRED = {"id", "title", "status", "icon"}


def main():
    if not os.path.exists(INPUT):
        raise FileNotFoundError("platforms.json not found")

    with open(INPUT, "r", encoding="utf-8") as f:
        platforms = json.load(f)

    state_platforms = []
    for p in platforms:
        if not REQUIRED.issubset(p):
            raise ValueError(f"Invalid platform schema: {p}")

        state_platforms.append({
            "id": p["id"],
            "title": p["title"],
            "subtitle": p.get("subtitle", ""),
            "status": p["status"],
            "icon": p["icon"],
            "enabled": p.get("enabled", True)
        })

    state = {
        "generated_at": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "offline": True,
        "platforms": state_platforms
    }

    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)

    print("platforms.state.json generated")


if __name__ == "__main__":
    main()
