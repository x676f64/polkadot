window.SIDEBAR_ITEMS = {"constant":[["ACTIVE_DURATION_SECS","The choice here is fairly arbitrary. But any dispute that concluded more than a few minutes ago is not worth considering anymore. Changing this value has little to no bearing on consensus, and really only affects the work that the node might do on startup during periods of many disputes."]],"enum":[["DisputeMessageCheckError","Things that can go wrong when constructing a `DisputeMessage`."],["DisputeStatus","The status of dispute. This is a state machine which can be altered by the helper methods."]],"fn":[["dispute_is_inactive","Returns true if the dispute has concluded for longer than ACTIVE_DURATION_SECS"]],"struct":[["CandidateVotes","Tracked votes on candidates, for the purposes of dispute resolution."],["DisputeMessage","A dispute initiating/participating message that is guaranteed to have been built from signed statements."],["InvalidDisputeVote","Any invalid vote (currently only explicit)."],["SignedDisputeStatement","A checked dispute statement from an associated validator."],["UncheckedDisputeMessage","A `DisputeMessage` where signatures of statements have not yet been checked."],["ValidDisputeVote","Any valid vote (backing, approval, explicit)."]],"type":[["InvalidVoteData","Type alias for retrieving invalid votes from `CandidateVotes`"],["Timestamp","Timestamp based on the 1 Jan 1970 UNIX base, which is persistent across node restarts and OS reboots."],["ValidVoteData","Type alias for retrieving valid votes from `CandidateVotes`"]]};