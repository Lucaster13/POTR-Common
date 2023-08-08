// Automatically generated with Reach 0.1.13 (88e48902)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

struct T2 {
  uint256[3] elem0;
  }
enum _enum_T3 {buyer_api_bronze0_895, buyer_api_gold0_895, buyer_api_silver0_895, controller_api_restock0_895, controller_api_set_prices0_895, controller_api_terminate0_895, controller_api_toggle_pause0_895, controller_api_withdraw0_895}
struct T3 {
  _enum_T3 which;
  bool _buyer_api_bronze0_895;
  bool _buyer_api_gold0_895;
  bool _buyer_api_silver0_895;
  T2 _controller_api_restock0_895;
  T2 _controller_api_set_prices0_895;
  bool _controller_api_terminate0_895;
  bool _controller_api_toggle_pause0_895;
  bool _controller_api_withdraw0_895;
  }
struct T4 {
  uint256 elem0;
  T3 elem1;
  }
struct T5 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T7 {
  address payable v6612;
  address payable v6613;
  address payable v6614;
  address payable v6615;
  address payable v6637;
  uint256[3] v6677;
  bool v6678;
  T5[3] v6686;
  uint256 v6687;
  T5 v12120;
  uint256 v12121;
  uint256 v12123;
  uint256 v12125;
  uint256[3] v12126;
  }
struct T8 {
  address payable v6612;
  address payable v6613;
  address payable v6614;
  address payable v6615;
  address payable v6637;
  uint256[3] v6677;
  bool v6678;
  bool v6679;
  T5[3] v6686;
  uint256 v6687;
  bool v6713;
  T5 v6714;
  uint256 v6715;
  T5 v6716;
  uint256 v6717;
  T5 v6718;
  uint256 v6719;
  uint256[3] v6720;
  uint256 v6722;
  uint256 v6723;
  uint256 v6724;
  }
struct T9 {
  uint256 elem0;
  address payable elem1;
  address payable elem2;
  address payable elem3;
  }
struct T10 {
  address payable v6612;
  address payable v6613;
  address payable v6614;
  address payable v6615;
  T5[3] v6630;
  address payable v6637;
  }
struct T11 {
  uint256 elem0;
  }
struct T12 {
  address payable elem0;
  address payable elem1;
  address payable elem2;
  address payable elem3;
  address payable elem4;
  uint256[3] elem5;
  bool elem6;
  bool elem7;
  uint256 elem8;
  T5[3] elem9;
  uint256 elem10;
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set0(uint256[3] memory arr, uint256 idx, uint256 val) internal  returns (uint256[3] memory arrp) {
    for (uint256 i = 0; i < 3; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  function array_set6(T5[3] memory arr, uint256 idx, T5 memory val) internal  returns (T5[3] memory arrp) {
    for (uint256 i = 0; i < 3; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T9 _a);
  event _reach_e1(address _who, T11 _a);
  event _reach_e3(address _who, T11 _a);
  event _reach_e4(address _who, T4 _a);
  event _reach_oe_v10163(bool v0);
  event _reach_oe_v10794(bool v0);
  event _reach_oe_v11422(bool v0);
  event _reach_oe_v12112(bool v0);
  event _reach_oe_v7512(bool v0);
  event _reach_oe_v8202(bool v0);
  event _reach_oe_v8892(bool v0);
  event _reach_oe_v9528(bool v0);
  event price_change(uint256[3] v0);
  event purchase(bytes6 v0, address payable v1);
  event restock(uint256[3] v0);
  event terminate(bool v0);
  event withdraw(uint256[3] v0);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_buyer_api_bronze;
    bool _reachr_buyer_api_gold;
    bool _reachr_buyer_api_silver;
    uint256[3] _reachr_coin_prices;
    uint256[3] _reachr_coin_supply;
    bool _reachr_controller_api_restock;
    bool _reachr_controller_api_set_prices;
    bool _reachr_controller_api_terminate;
    bool _reachr_controller_api_toggle_pause;
    bool _reachr_controller_api_withdraw;
    bool _reachr_is_paused;
    }
  struct _F17791 {
    bool v17744;
    T3 v17745;
    }
  function _reacha_buyer_api_bronze(bool _a, Memory memory _Memory) internal  {
    _F17791 memory _f;
    _f.v17745.which = _enum_T3.buyer_api_bronze0_895;
    _f.v17745._buyer_api_bronze0_895 = _f.v17744;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17745;
    _reachi_4(_ja, _Memory);
    }
  struct _F17792 {
    bool v17748;
    T3 v17749;
    }
  function _reacha_buyer_api_gold(bool _a, Memory memory _Memory) internal  {
    _F17792 memory _f;
    _f.v17749.which = _enum_T3.buyer_api_gold0_895;
    _f.v17749._buyer_api_gold0_895 = _f.v17748;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17749;
    _reachi_4(_ja, _Memory);
    }
  struct _F17793 {
    bool v17752;
    T3 v17753;
    }
  function _reacha_buyer_api_silver(bool _a, Memory memory _Memory) internal  {
    _F17793 memory _f;
    _f.v17753.which = _enum_T3.buyer_api_silver0_895;
    _f.v17753._buyer_api_silver0_895 = _f.v17752;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17753;
    _reachi_4(_ja, _Memory);
    }
  function _reacha_coin_prices(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(7) /*'(./src/contracts/coin_shop.rsh:83:28:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T7 memory _svs) = abi.decode(current_svbs, (T7));
      _Memory._reachr_coin_prices = _svs.v6677;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(8) /*'(./src/contracts/coin_shop.rsh:83:28:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T8 memory _svs) = abi.decode(current_svbs, (T8));
      _Memory._reachr_coin_prices = _svs.v6677;
      }
    }
  function _reacha_coin_supply(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(9) /*'(./src/contracts/coin_shop.rsh:82:28:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T7 memory _svs) = abi.decode(current_svbs, (T7));
      _Memory._reachr_coin_supply = _svs.v12126;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(10) /*'(./src/contracts/coin_shop.rsh:82:28:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T8 memory _svs) = abi.decode(current_svbs, (T8));
      _Memory._reachr_coin_supply = _svs.v6720;
      }
    }
  struct _F17796 {
    T2 v17757;
    T3 v17758;
    }
  function _reacha_controller_api_restock(uint256[3] memory _a, Memory memory _Memory) internal  {
    _F17796 memory _f;
    _f.v17757.elem0 = _a;
    _f.v17758.which = _enum_T3.controller_api_restock0_895;
    _f.v17758._controller_api_restock0_895 = _f.v17757;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17758;
    _reachi_4(_ja, _Memory);
    }
  struct _F17797 {
    T2 v17763;
    T3 v17764;
    }
  function _reacha_controller_api_set_prices(uint256[3] memory _a, Memory memory _Memory) internal  {
    _F17797 memory _f;
    _f.v17763.elem0 = _a;
    _f.v17764.which = _enum_T3.controller_api_set_prices0_895;
    _f.v17764._controller_api_set_prices0_895 = _f.v17763;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17764;
    _reachi_4(_ja, _Memory);
    }
  struct _F17798 {
    bool v17768;
    T3 v17769;
    }
  function _reacha_controller_api_terminate(bool _a, Memory memory _Memory) internal  {
    _F17798 memory _f;
    _f.v17769.which = _enum_T3.controller_api_terminate0_895;
    _f.v17769._controller_api_terminate0_895 = _f.v17768;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17769;
    _reachi_4(_ja, _Memory);
    }
  struct _F17799 {
    bool v17772;
    T3 v17773;
    }
  function _reacha_controller_api_toggle_pause(bool _a, Memory memory _Memory) internal  {
    _F17799 memory _f;
    _f.v17773.which = _enum_T3.controller_api_toggle_pause0_895;
    _f.v17773._controller_api_toggle_pause0_895 = _f.v17772;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17773;
    _reachi_4(_ja, _Memory);
    }
  struct _F17800 {
    bool v17776;
    T3 v17777;
    }
  function _reacha_controller_api_withdraw(bool _a, Memory memory _Memory) internal  {
    _F17800 memory _f;
    _f.v17777.which = _enum_T3.controller_api_withdraw0_895;
    _f.v17777._controller_api_withdraw0_895 = _f.v17776;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v17777;
    _reachi_4(_ja, _Memory);
    }
  function _reacha_is_paused(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(5))) {
      reachRequire(((current_step == uint256(3))), uint256(11) /*'(./src/contracts/coin_shop.rsh:84:26:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T7 memory _svs) = abi.decode(current_svbs, (T7));
      _Memory._reachr_is_paused = _svs.v6678;
      }
    else {
      reachRequire(((current_step == uint256(5))), uint256(12) /*'(./src/contracts/coin_shop.rsh:84:26:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T8 memory _svs) = abi.decode(current_svbs, (T8));
      _Memory._reachr_is_paused = _svs.v6678;
      }
    }
  struct _F17802 {
    T5 v6567;
    T5[3] v6568;
    T5[3] v6620;
    T5[3] v6624;
    bool v6632;
    bool v6635;
    address payable v6637;
    }
  function _reachi_0(T9 memory _a, Memory memory _Memory) internal  {
    _F17802 memory _f;
    reachRequire((! locked), uint256(13) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(14) /*'time check at ./src/contracts/coin_shop.rsh:108:18:dot'*/);
    _f.v6567.elem0 = uint256(0);
    _f.v6567.elem1 = uint256(0);
    _f.v6567.elem2 = false;
    _f.v6568[0] = _f.v6567;
    _f.v6568[1] = _f.v6567;
    _f.v6568[2] = _f.v6567;
    _f.v6620 = array_set6(_f.v6568, uint256(0), (T5({elem0: uint256(0), elem1: (_f.v6568[uint256(0)]).elem1, elem2: (_f.v6568[uint256(0)]).elem2})));
    _f.v6624 = array_set6(_f.v6620, uint256(1), (T5({elem0: uint256(0), elem1: (_f.v6620[uint256(1)]).elem1, elem2: (_f.v6620[uint256(1)]).elem2})));
    reachRequire(((((_a.elem2) == (_a.elem1)) ? false : true)), uint256(15) /*'(./src/contracts/coin_shop.rsh:108:18:dot,[],Just "non-network tokens distinct")'*/);
    _f.v6632 = (_a.elem3) == (_a.elem1);
    _f.v6635 = ((_a.elem3) == (_a.elem2)) ? false : true;
    reachRequire(((_f.v6632 ? false : _f.v6635)), uint256(16) /*'(./src/contracts/coin_shop.rsh:108:18:dot,[],Just "non-network tokens distinct")'*/);
    
    
    
    reachRequire((msg.value == uint256(0)), uint256(17) /*'(./src/contracts/coin_shop.rsh:108:18:dot,[],"verify network token pay amount")'*/);
    _f.v6637 = payable(msg.sender);
    reachRequire(((((_a.elem1) == (_a.elem2)) ? false : true)), uint256(18) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)],Just "The asa ids provided are the same")'*/);
    reachRequire(((((_a.elem1) == (_a.elem3)) ? false : true)), uint256(19) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)],Just "The asa ids provided are the same")'*/);
    reachRequire(((((_a.elem2) == (_a.elem3)) ? false : true)), uint256(20) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)],Just "The asa ids provided are the same")'*/);
    reachRequire(((_f.v6632 ? false : true)), uint256(21) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)],Just "The asa ids provided are the same")'*/);
    reachRequire((_f.v6635), uint256(22) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:24:49:application call to "check" (defined at: reach standard library:49:32:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:23:52:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:23:40:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at reach standard library:554:6:application call to "f" (defined at: ./src/contracts/util/checks.rsh:22:44:function exp),at reach standard library:553:20:application call to [unknown function] (defined at: reach standard library:553:41:function exp),at reach standard library:559:25:application call to "Array_forEachWithIndex" (defined at: reach standard library:552:46:function exp),at ./src/contracts/util/checks.rsh:22:32:application call to [unknown function] (defined at: reach standard library:558:51:function exp),at ./src/contracts/coin_shop.rsh:114:26:application call to "checkUniqueTokens" (defined at: ./src/contracts/util/checks.rsh:21:36:function exp)],Just "The asa ids provided are the same")'*/);
    T10 memory nsvs;
    nsvs.v6612 = payable(msg.sender);
    nsvs.v6613 = (_a.elem1);
    nsvs.v6614 = (_a.elem2);
    nsvs.v6615 = (_a.elem3);
    nsvs.v6630 = (array_set6(_f.v6624, uint256(2), (T5({elem0: uint256(0), elem1: (_f.v6624[uint256(2)]).elem1, elem2: (_f.v6624[uint256(2)]).elem2}))));
    nsvs.v6637 = _f.v6637;
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F17803 {
    uint256[3] v6676;
    }
  function _reachi_1(T11 memory _a, Memory memory _Memory) internal  {
    _F17803 memory _f;
    reachRequire((current_step == uint256(1)), uint256(23) /*'state check at ./src/contracts/coin_shop.rsh:120:18:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(24) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(25) /*'time check at ./src/contracts/coin_shop.rsh:120:18:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(26) /*'(./src/contracts/coin_shop.rsh:120:18:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6612 == payable(msg.sender))), uint256(27) /*'(./src/contracts/coin_shop.rsh:120:18:dot,[],Just "sender correct")'*/);
    _f.v6676[0] = uint256(10000000);
    _f.v6676[1] = uint256(20000000);
    _f.v6676[2] = uint256(30000000);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _f.v6676;
    _ja.elem6 = false;
    _ja.elem7 = false;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v6630;
    _ja.elem10 = uint256(0);
    _reachl_2(_ja, _Memory);
    }
  struct _F17804 {
    uint256 v12173;
    T5[3] v12178;
    uint256 v12184;
    }
  function _reachi_3(T11 memory _a, Memory memory _Memory) internal  {
    _F17804 memory _f;
    reachRequire((current_step == uint256(3)), uint256(28) /*'state check at reach standard library:197:11:dot'*/);
    (T7 memory _svs) = abi.decode(current_svbs, (T7));
    reachRequire((! locked), uint256(29) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(30) /*'time check at reach standard library:197:11:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(reach standard library:197:11:dot,[at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],"verify network token pay amount")'*/);
    reachRequire((((_svs.v6637 == payable(msg.sender)) ? true : (_svs.v6612 == payable(msg.sender)))), uint256(32) /*'(reach standard library:197:11:dot,[at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "sender correct")'*/);
    reachRequire((((unsafeSub(_svs.v6687, _svs.v6687)) >= uint256(0))), uint256(33) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    _svs.v6637.transfer(_svs.v6687);
    _f.v12173 = unsafeSub(_svs.v12121, _svs.v12121);
    reachRequire(((_f.v12173 >= uint256(0))), uint256(34) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    _f.v12178 = array_set6(_svs.v6686, uint256(0), (T5({elem0: _f.v12173, elem1: _svs.v12120.elem1, elem2: _svs.v12120.elem2})));
    safeTokenTransfer(_svs.v6613, _svs.v6637, _svs.v12121);
    _f.v12184 = unsafeSub(((_f.v12178[uint256(1)]).elem0), _svs.v12123);
    reachRequire(((_f.v12184 >= uint256(0))), uint256(35) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v6614, _svs.v6637, _svs.v12123);
    reachRequire((((unsafeSub((((array_set6(_f.v12178, uint256(1), (T5({elem0: _f.v12184, elem1: (_f.v12178[uint256(1)]).elem1, elem2: (_f.v12178[uint256(1)]).elem2}))))[uint256(2)]).elem0), _svs.v12125)) >= uint256(0))), uint256(36) /*'(reach standard library:198:46:application,[at ./src/contracts/coin_shop.rsh:309:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v6615, _svs.v6637, _svs.v12125);
    current_step = 0x0;
    current_time = 0x0;
    delete current_svbs;
    }
  struct _F17805 {
    uint256 v7416;
    uint256 v7475;
    uint256 v7505;
    bytes6 v7511;
    uint256 v8030;
    uint256 v8165;
    uint256 v8195;
    bytes6 v8201;
    uint256 v8644;
    uint256 v8855;
    uint256 v8885;
    bytes6 v8891;
    T2 v9049;
    uint256 v9263;
    T5[3] v9268;
    uint256 v9271;
    T5[3] v9276;
    uint256 v9279;
    T5[3] v9284;
    uint256[3] v9524;
    T2 v9663;
    bool v11422;
    uint256 v12083;
    T5[3] v12088;
    uint256 v12094;
    T5[3] v12099;
    uint256 v12105;
    }
  function _reachi_4(T4 memory _a, Memory memory _Memory) internal  {
    _F17805 memory _f;
    reachRequire((current_step == uint256(5)), uint256(37) /*'state check at ./src/contracts/coin_shop.rsh:123:68:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((! locked), uint256(38) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(39) /*'time check at ./src/contracts/coin_shop.rsh:123:68:dot'*/);
    if ((_a.elem1).which == _enum_T3.buyer_api_bronze0_895) {
    reachRequire((_svs.v6713), uint256(40) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:155:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp),at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "contract is currently inactive")'*/);
    reachRequire(((_svs.v6715 >= uint256(1))), uint256(41) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:156:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp),at ./src/contracts/coin_shop.rsh:154:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:154:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "balance insufficient for transaction")'*/);
    _f.v7416 = unsafeAdd(_svs.v6687, _svs.v6722);
    reachRequire(((_f.v7416 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(42) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == _svs.v6722), uint256(43) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6715 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(44) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, uint256(0))), uint256(45) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6717 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(46) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, uint256(0))), uint256(47) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6719 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(48) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, uint256(0))), uint256(49) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v7475 = unsafeSub(_f.v7416, _f.v7416);
    reachRequire(((_f.v7475 >= uint256(0))), uint256(50) /*'(./src/contracts/coin_shop.rsh:163:84:application,[at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)],Just "assume >= 0")'*/);
    _svs.v6637.transfer(_f.v7416);
    _f.v7505 = unsafeSub(_svs.v6715, uint256(1));
    reachRequire(((_f.v7505 >= uint256(0))), uint256(51) /*'(./src/contracts/coin_shop.rsh:164:76:application,[at ./src/contracts/coin_shop.rsh:161:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:161:43:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v6613, payable(msg.sender), uint256(1));
    _f.v7511 = hex'62726f6e7a65';
    emit purchase( _f.v7511,  payable(msg.sender));
    emit _reach_oe_v7512( (true));
    _Memory._reachr_buyer_api_bronze = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _svs.v6677;
    _ja.elem6 = _svs.v6678;
    _ja.elem7 = _svs.v6679;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = (array_set6(_svs.v6686, uint256(0), (T5({elem0: _f.v7505, elem1: _svs.v6714.elem1, elem2: _svs.v6714.elem2}))));
    _ja.elem10 = _f.v7475;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.buyer_api_gold0_895) {
    reachRequire((_svs.v6713), uint256(52) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:195:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp),at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "contract is currently inactive")'*/);
    reachRequire(((_svs.v6719 >= uint256(1))), uint256(53) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:196:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp),at ./src/contracts/coin_shop.rsh:194:38:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:194:38:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "balance insufficient for transaction")'*/);
    _f.v8030 = unsafeAdd(_svs.v6687, _svs.v6724);
    reachRequire(((_f.v8030 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(54) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == _svs.v6724), uint256(55) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6715 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(56) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, uint256(0))), uint256(57) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6717 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(58) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, uint256(0))), uint256(59) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6719 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(60) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, uint256(0))), uint256(61) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v8165 = unsafeSub(_f.v8030, _f.v8030);
    reachRequire(((_f.v8165 >= uint256(0))), uint256(62) /*'(./src/contracts/coin_shop.rsh:203:84:application,[at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)],Just "assume >= 0")'*/);
    _svs.v6637.transfer(_f.v8030);
    _f.v8195 = unsafeSub(_svs.v6719, uint256(1));
    reachRequire(((_f.v8195 >= uint256(0))), uint256(63) /*'(./src/contracts/coin_shop.rsh:204:76:application,[at ./src/contracts/coin_shop.rsh:201:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:201:43:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v6615, payable(msg.sender), uint256(1));
    _f.v8201 = hex'676f6c640000';
    emit purchase( _f.v8201,  payable(msg.sender));
    emit _reach_oe_v8202( (true));
    _Memory._reachr_buyer_api_gold = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _svs.v6677;
    _ja.elem6 = _svs.v6678;
    _ja.elem7 = _svs.v6679;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = (array_set6(_svs.v6686, uint256(2), (T5({elem0: _f.v8195, elem1: _svs.v6718.elem1, elem2: _svs.v6718.elem2}))));
    _ja.elem10 = _f.v8165;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.buyer_api_silver0_895) {
    reachRequire((_svs.v6713), uint256(64) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:31:35:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:175:38:application call to "checkInactive" (defined at: ./src/contracts/util/checks.rsh:31:27:function exp),at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "contract is currently inactive")'*/);
    reachRequire(((_svs.v6717 >= uint256(1))), uint256(65) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:27:42:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:176:40:application call to "checkWithdrawal" (defined at: ./src/contracts/util/checks.rsh:27:34:function exp),at ./src/contracts/coin_shop.rsh:174:40:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:174:40:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "balance insufficient for transaction")'*/);
    _f.v8644 = unsafeAdd(_svs.v6687, _svs.v6723);
    reachRequire(((_f.v8644 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(66) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == _svs.v6723), uint256(67) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6715 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(68) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, uint256(0))), uint256(69) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6717 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(70) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, uint256(0))), uint256(71) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6719 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(72) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, uint256(0))), uint256(73) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v8855 = unsafeSub(_f.v8644, _f.v8644);
    reachRequire(((_f.v8855 >= uint256(0))), uint256(74) /*'(./src/contracts/coin_shop.rsh:183:84:application,[at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)],Just "assume >= 0")'*/);
    _svs.v6637.transfer(_f.v8644);
    _f.v8885 = unsafeSub(_svs.v6717, uint256(1));
    reachRequire(((_f.v8885 >= uint256(0))), uint256(75) /*'(./src/contracts/coin_shop.rsh:184:76:application,[at ./src/contracts/coin_shop.rsh:181:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:181:43:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v6614, payable(msg.sender), uint256(1));
    _f.v8891 = hex'73696c766572';
    emit purchase( _f.v8891,  payable(msg.sender));
    emit _reach_oe_v8892( (true));
    _Memory._reachr_buyer_api_silver = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _svs.v6677;
    _ja.elem6 = _svs.v6678;
    _ja.elem7 = _svs.v6679;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = (array_set6(_svs.v6686, uint256(1), (T5({elem0: _f.v8885, elem1: _svs.v6716.elem1, elem2: _svs.v6716.elem2}))));
    _ja.elem10 = _f.v8855;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_restock0_895) {
    _f.v9049 = (_a.elem1)._controller_api_restock0_895;
    reachRequire(((payable(msg.sender) == _svs.v6637)), uint256(76) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:218:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp),at ./src/contracts/coin_shop.rsh:217:50:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:217:50:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "action not permitted")'*/);
    reachRequire(((_svs.v6687 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(77) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(78) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    _f.v9263 = unsafeAdd(_svs.v6715, ((_f.v9049.elem0)[uint256(0)]));
    reachRequire(((_f.v9263 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(79) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    _f.v9268 = array_set6(_svs.v6686, uint256(0), (T5({elem0: _f.v9263, elem1: _svs.v6714.elem1, elem2: _svs.v6714.elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, ((_f.v9049.elem0)[uint256(0)]))), uint256(80) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v9271 = unsafeAdd(((_f.v9268[uint256(1)]).elem0), ((_f.v9049.elem0)[uint256(1)]));
    reachRequire(((_f.v9271 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(81) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    _f.v9276 = array_set6(_f.v9268, uint256(1), (T5({elem0: _f.v9271, elem1: (_f.v9268[uint256(1)]).elem1, elem2: (_f.v9268[uint256(1)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, ((_f.v9049.elem0)[uint256(1)]))), uint256(82) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v9279 = unsafeAdd(((_f.v9276[uint256(2)]).elem0), ((_f.v9049.elem0)[uint256(2)]));
    reachRequire(((_f.v9279 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(83) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    _f.v9284 = array_set6(_f.v9276, uint256(2), (T5({elem0: _f.v9279, elem1: (_f.v9276[uint256(2)]).elem1, elem2: (_f.v9276[uint256(2)]).elem2})));
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, ((_f.v9049.elem0)[uint256(2)]))), uint256(84) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v9524[0] = ((_f.v9284[uint256(0)]).elem0);
    _f.v9524[1] = ((_f.v9284[uint256(1)]).elem0);
    _f.v9524[2] = ((_f.v9284[uint256(2)]).elem0);
    emit restock( _f.v9524);
    emit _reach_oe_v9528( (true));
    _Memory._reachr_controller_api_restock = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _svs.v6677;
    _ja.elem6 = _svs.v6678;
    _ja.elem7 = _svs.v6679;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _f.v9284;
    _ja.elem10 = _svs.v6687;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_set_prices0_895) {
    _f.v9663 = (_a.elem1)._controller_api_set_prices0_895;
    reachRequire(((payable(msg.sender) == _svs.v6637)), uint256(85) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:235:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp),at ./src/contracts/coin_shop.rsh:234:58:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:234:58:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "action not permitted")'*/);
    reachRequire(((_svs.v6687 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(86) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(87) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6715 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(88) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, uint256(0))), uint256(89) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6717 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(90) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, uint256(0))), uint256(91) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6719 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(92) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, uint256(0))), uint256(93) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    emit price_change( (_f.v9663.elem0));
    emit _reach_oe_v10163( (true));
    _Memory._reachr_controller_api_set_prices = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = (_f.v9663.elem0);
    _ja.elem6 = _svs.v6678;
    _ja.elem7 = _svs.v6679;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v6686;
    _ja.elem10 = _svs.v6687;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_terminate0_895) {
    reachRequire(((payable(msg.sender) == _svs.v6637)), uint256(94) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:292:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp),at ./src/contracts/coin_shop.rsh:291:48:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:291:48:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "action not permitted")'*/);
    reachRequire(((_svs.v6687 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(95) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(96) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6715 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(97) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, uint256(0))), uint256(98) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6717 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(99) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, uint256(0))), uint256(100) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6719 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(101) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, uint256(0))), uint256(102) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    emit terminate( (true));
    emit _reach_oe_v10794( (true));
    _Memory._reachr_controller_api_terminate = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _svs.v6677;
    _ja.elem6 = _svs.v6678;
    _ja.elem7 = true;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v6686;
    _ja.elem10 = _svs.v6687;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_toggle_pause0_895) {
    reachRequire(((payable(msg.sender) == _svs.v6637)), uint256(103) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:252:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp),at ./src/contracts/coin_shop.rsh:251:51:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:251:51:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "action not permitted")'*/);
    reachRequire(((_svs.v6687 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(104) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(105) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6715 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(106) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, uint256(0))), uint256(107) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6717 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(108) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, uint256(0))), uint256(109) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6719 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(110) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, uint256(0))), uint256(111) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v11422 = _svs.v6678 ? false : true;
    emit _reach_oe_v11422( _f.v11422);
    _Memory._reachr_controller_api_toggle_pause = _f.v11422;
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _svs.v6677;
    _ja.elem6 = _f.v11422;
    _ja.elem7 = _svs.v6679;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v6686;
    _ja.elem10 = _svs.v6687;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.controller_api_withdraw0_895) {
    reachRequire(((payable(msg.sender) == _svs.v6637)), uint256(112) /*'(reach standard library:57:5:application,[at ./src/contracts/util/checks.rsh:30:37:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/coin_shop.rsh:272:40:application call to "checkPermission" (defined at: ./src/contracts/util/checks.rsh:30:29:function exp),at ./src/contracts/coin_shop.rsh:271:47:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:271:47:function exp),at ./src/contracts/coin_shop.rsh:123:68:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:123:68:function exp),at ./src/contracts/coin_shop.rsh:130:26:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:130:26:function exp)],Just "action not permitted")'*/);
    reachRequire(((_svs.v6687 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(113) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((msg.value == uint256(0)), uint256(114) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v6715 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(115) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6613, uint256(0))), uint256(116) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6717 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(117) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6614, uint256(0))), uint256(118) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v6719 <= uint256(115792089237316195423570985008687907853269984665640564039457584007913129639935))), uint256(119) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],Just "assume <= UInt.max")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v6615, uint256(0))), uint256(120) /*'(./src/contracts/coin_shop.rsh:123:68:dot,[],"verify non-network token pay amount")'*/);
    _f.v12083 = unsafeSub(_svs.v6715, _svs.v6715);
    reachRequire(((_f.v12083 >= uint256(0))), uint256(121) /*'(./src/contracts/coin_shop.rsh:281:76:application,[at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)],Just "assume >= 0")'*/);
    _f.v12088 = array_set6(_svs.v6686, uint256(0), (T5({elem0: _f.v12083, elem1: _svs.v6714.elem1, elem2: _svs.v6714.elem2})));
    safeTokenTransfer(_svs.v6613, _svs.v6637, _svs.v6715);
    _f.v12094 = unsafeSub(((_f.v12088[uint256(1)]).elem0), _svs.v6717);
    reachRequire(((_f.v12094 >= uint256(0))), uint256(122) /*'(./src/contracts/coin_shop.rsh:281:76:application,[at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)],Just "assume >= 0")'*/);
    _f.v12099 = array_set6(_f.v12088, uint256(1), (T5({elem0: _f.v12094, elem1: (_f.v12088[uint256(1)]).elem1, elem2: (_f.v12088[uint256(1)]).elem2})));
    safeTokenTransfer(_svs.v6614, _svs.v6637, _svs.v6717);
    _f.v12105 = unsafeSub(((_f.v12099[uint256(2)]).elem0), _svs.v6719);
    reachRequire(((_f.v12105 >= uint256(0))), uint256(123) /*'(./src/contracts/coin_shop.rsh:281:76:application,[at ./src/contracts/coin_shop.rsh:276:43:application call to [unknown function] (defined at: ./src/contracts/coin_shop.rsh:276:43:function exp)],Just "assume >= 0")'*/);
    safeTokenTransfer(_svs.v6615, _svs.v6637, _svs.v6719);
    emit withdraw( _svs.v6720);
    emit _reach_oe_v12112( (true));
    _Memory._reachr_controller_api_withdraw = (true);
    T12  memory _ja;
    _ja.elem0 = _svs.v6612;
    _ja.elem1 = _svs.v6613;
    _ja.elem2 = _svs.v6614;
    _ja.elem3 = _svs.v6615;
    _ja.elem4 = _svs.v6637;
    _ja.elem5 = _svs.v6677;
    _ja.elem6 = _svs.v6678;
    _ja.elem7 = _svs.v6679;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = (array_set6(_f.v12099, uint256(2), (T5({elem0: _f.v12105, elem1: (_f.v12099[uint256(2)]).elem1, elem2: (_f.v12099[uint256(2)]).elem2}))));
    _ja.elem10 = _svs.v6687;
    _reachl_2(_ja, _Memory);
    }
    }
  struct _F17806 {
    uint256[3] v6720;
    uint256[3] v12126;
    }
  function _reachl_2(T12 memory _a, Memory memory _Memory) internal  {
    _F17806 memory _f;
    if (_a.elem7) {
      _f.v12126[0] = ((_a.elem9[uint256(0)]).elem0);
      _f.v12126[1] = ((_a.elem9[uint256(1)]).elem0);
      _f.v12126[2] = ((_a.elem9[uint256(2)]).elem0);
      T7 memory nsvs;
      nsvs.v6612 = _a.elem0;
      nsvs.v6613 = _a.elem1;
      nsvs.v6614 = _a.elem2;
      nsvs.v6615 = _a.elem3;
      nsvs.v6637 = _a.elem4;
      nsvs.v6677 = _a.elem5;
      nsvs.v6678 = _a.elem6;
      nsvs.v6686 = _a.elem9;
      nsvs.v6687 = _a.elem10;
      nsvs.v12120 = (_a.elem9[uint256(0)]);
      nsvs.v12121 = ((_a.elem9[uint256(0)]).elem0);
      nsvs.v12123 = ((_a.elem9[uint256(1)]).elem0);
      nsvs.v12125 = ((_a.elem9[uint256(2)]).elem0);
      nsvs.v12126 = _f.v12126;
      current_step = uint256(3);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _f.v6720[0] = ((_a.elem9[uint256(0)]).elem0);
      _f.v6720[1] = ((_a.elem9[uint256(1)]).elem0);
      _f.v6720[2] = ((_a.elem9[uint256(2)]).elem0);
      T8 memory nsvs;
      nsvs.v6612 = _a.elem0;
      nsvs.v6613 = _a.elem1;
      nsvs.v6614 = _a.elem2;
      nsvs.v6615 = _a.elem3;
      nsvs.v6637 = _a.elem4;
      nsvs.v6677 = _a.elem5;
      nsvs.v6678 = _a.elem6;
      nsvs.v6679 = false;
      nsvs.v6686 = _a.elem9;
      nsvs.v6687 = _a.elem10;
      nsvs.v6713 = (_a.elem6);
      nsvs.v6714 = (_a.elem9[uint256(0)]);
      nsvs.v6715 = ((_a.elem9[uint256(0)]).elem0);
      nsvs.v6716 = (_a.elem9[uint256(1)]);
      nsvs.v6717 = ((_a.elem9[uint256(1)]).elem0);
      nsvs.v6718 = (_a.elem9[uint256(2)]);
      nsvs.v6719 = ((_a.elem9[uint256(2)]).elem0);
      nsvs.v6720 = _f.v6720;
      nsvs.v6722 = (_a.elem5[uint256(0)]);
      nsvs.v6723 = (_a.elem5[uint256(1)]);
      nsvs.v6724 = (_a.elem5[uint256(2)]);
      current_step = uint256(5);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    }
  constructor(T9 memory v17781) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v17781, _Memory);
    }
  function _reachp_1(T11 calldata v17784) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v17784, _Memory);
    }
  function _reachp_3(T11 calldata v17787) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v17787, _Memory);
    }
  function _reachp_4(T4 calldata v17790) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v17790, _Memory);
    }
  function buyer_api_bronze() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_buyer_api_bronze(_ja, _Memory);
    return _Memory._reachr_buyer_api_bronze;
    }
  function buyer_api_gold() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_buyer_api_gold(_ja, _Memory);
    return _Memory._reachr_buyer_api_gold;
    }
  function buyer_api_silver() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_buyer_api_silver(_ja, _Memory);
    return _Memory._reachr_buyer_api_silver;
    }
  function coin_prices() external view returns (uint256[3] memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_coin_prices(_ja, _Memory);
    return _Memory._reachr_coin_prices;
    }
  function coin_supply() external view returns (uint256[3] memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_coin_supply(_ja, _Memory);
    return _Memory._reachr_coin_supply;
    }
  function controller_api_restock(uint256[3] calldata v17760) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_controller_api_restock(v17760, _Memory);
    return _Memory._reachr_controller_api_restock;
    }
  function controller_api_set_prices(uint256[3] calldata v17766) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_controller_api_set_prices(v17766, _Memory);
    return _Memory._reachr_controller_api_set_prices;
    }
  function controller_api_terminate() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_controller_api_terminate(_ja, _Memory);
    return _Memory._reachr_controller_api_terminate;
    }
  function controller_api_toggle_pause() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_controller_api_toggle_pause(_ja, _Memory);
    return _Memory._reachr_controller_api_toggle_pause;
    }
  function controller_api_withdraw() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_controller_api_withdraw(_ja, _Memory);
    return _Memory._reachr_controller_api_withdraw;
    }
  function is_paused() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_is_paused(_ja, _Memory);
    return _Memory._reachr_is_paused;
    }
  }
